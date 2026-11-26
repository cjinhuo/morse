export const siteBase = 'https://cjinhuo.github.io/morse/'
export const siteName = 'MorseType'

export const pages = {
  index: {
    path: '',
    title: '摩尔斯电码在线练习（Morse Code Trainer）',
    englishTitle: 'Morse Code Typing Practice',
    description: '用空格键或触屏练习摩尔斯电码。短按输入点，长按输入划，跟随提示和音效练习并查看准确率。',
    englishDescription:
      'Practice Morse code with the space bar or on a touchscreen. Tap for a dot, hold for a dash, and track your accuracy.',
    example: '试试输入 SOS（... --- ...）：短按三次输入 S，长按三次输入 O，再短按三次输入 S。',
    englishExample:
      'Try typing SOS (... --- ...): tap three times for S, hold three times for O, then tap three times for S.',
    image: 'more_play.png',
  },
  'converter/index': {
    path: 'converter/',
    title: '文字转摩尔斯电码转换器（支持 SVG / PNG）',
    englishTitle: 'Text to Morse Code Converter',
    description:
      '将英文字母、数字和支持的标点转换成摩尔斯电码。查看和复制点划编码，或将可自定义的图形导出为 SVG 和 PNG。',
    englishDescription:
      'Convert text to Morse code, copy the dots and dashes, or export a customizable signal graphic as SVG or PNG.',
    example: '输入 HI 5，得到 .... .. / ..... 。空格分隔字母，斜杠分隔单词。转换方向是文字到摩尔斯码，不支持反向解码。',
    englishExample:
      'Enter HI 5 to get .... .. / ..... . Spaces separate letters; a slash separates words. This tool does not decode Morse back to text.',
    image: 'export_pic.png',
  },
  'latin/index': {
    path: 'latin/',
    title: '英文打字练习与速度测试（English Typing Practice）',
    englishTitle: 'English Typing Practice and Speed Test',
    description: '跟着句子练习英文键盘输入，实时查看每分钟单词数（WPM）、字符数和准确率，并用错误反馈纠正输入。',
    englishDescription:
      'Type English practice sentences and get real-time feedback on words per minute, characters per minute, mistakes, and accuracy.',
    example: '按屏幕高亮逐字输入，输错可用退格修正。WPM 按 5 个正确字符为一个词计算，空格也计入字符。',
    englishExample:
      'Type each highlighted character. Use Backspace to fix mistakes. One word for WPM is five correct characters; spaces also count.',
    image: 'latin_play.png',
  },
  'chart/index': {
    path: 'chart/',
    title: '摩尔斯电码对照表：A–Z 和 0–9（Morse Code Chart）',
    englishTitle: 'Morse Code Chart: A–Z and 0–9',
    description: '查询 26 个英文字母和 10 个数字的国际摩尔斯电码，查看点、划的写法和可直接练习的示例。',
    englishDescription:
      'Look up International Morse code for all 26 English letters and 10 digits in one readable chart.',
    example: '先记 E（.）、T（-）、A（.-）和 N（-.），再到练习页输入 SOS（... --- ...）。',
    englishExample: 'Start with E (.), T (-), A (.-), and N (-.). Then try SOS (... --- ...) in the trainer.',
    image: 'more_play.png',
  },
} as const
