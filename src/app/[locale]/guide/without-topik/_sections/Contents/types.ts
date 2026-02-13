export type Section2 = {
  questions: string[]
  eligibility: {
    q: string
    a: string
    title: string
    display: {
      title: string
      list: string[]
      items: string[]
    }
    footerText: string
  }
  english: {
    q: string
    title: string
    table: {
      head: string[]
      body: { key: string; value: string }[]
    }
    footerText: string
  }
  conditional: {
    q: string
    title: string
    list: {
      title: string
      items: {
        title: string
        list: string[]
      }[]
    }[]
    footerText: string
  }
  topik: {
    q: string
    title: string
    list: string[]
    footerDisplay: {
      title: string
      description: string
    }
  }
  considerations: {
    q: string
    title: string
    list: string[]
    footerDisplay: {
      title: string
      description: string
    }
  }
}
