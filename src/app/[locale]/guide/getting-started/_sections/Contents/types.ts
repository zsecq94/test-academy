export type Section2 = {
  questions: string[]
  visa: {
    title: string
    description: string
    list: {
      title: string
      items: {
        title: string
        list: string[]
      }[]
    }[]
    footerText: string
  }

  language: {
    title: string
    description: string
    list: {
      title: string
      subTitle: string
      list: string[]
      displayText: string
    }[]
  }

  university: {
    title: string
    display: {
      title: string
      list: string[]
    }
    footerText: string
  }

  preparation: {
    title: string
    display: {
      title: string
      list: string[]
    }
    footerText: string
  }
}
