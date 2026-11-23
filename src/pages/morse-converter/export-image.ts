function download(blob: Blob, extension: string) {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `morse-code-${Date.now()}.${extension}`
  document.body.append(link)
  link.click()
  link.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
}

export async function exportImage(svg: SVGSVGElement, format: 'svg' | 'png') {
  const copy = svg.cloneNode(true) as SVGSVGElement
  const style = getComputedStyle(svg)
  for (const element of copy.querySelectorAll('[fill]')) {
    const variable = element.getAttribute('fill')?.match(/^var\((--[\w-]+)\)$/)?.[1]
    if (variable) element.setAttribute('fill', style.getPropertyValue(variable).trim())
  }
  const xml = new XMLSerializer().serializeToString(copy)
  const blob = new Blob([xml], { type: 'image/svg+xml;charset=utf-8' })
  if (format === 'svg') {
    download(blob, format)
    return
  }
  const url = URL.createObjectURL(blob)
  try {
    const image = new Image()
    image.src = url
    await image.decode()
    const canvas = document.createElement('canvas')
    const { width, height } = svg.viewBox.baseVal
    const scale = Math.min(2, 8192 / Math.max(width, height), Math.sqrt(16000000 / (width * height)))
    canvas.width = Math.max(1, Math.ceil(width * scale))
    canvas.height = Math.max(1, Math.ceil(height * scale))
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('Canvas unavailable')
    ctx.fillStyle = style.getPropertyValue('--mt-surface').trim()
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
    const png = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'))
    if (!png) throw new Error('PNG unavailable')
    download(png, format)
  } finally {
    URL.revokeObjectURL(url)
  }
}
