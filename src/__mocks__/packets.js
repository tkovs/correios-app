export const statuses = [
  {
    status: 'Objeto entregue ao destinatário',
    datetime: {
      date: {
        day: 4,
        month: 2,
        year: 2020,
      },
      time: {
        hour: 16,
        minute: 37,
      },
    },
    locale: {
      place: 'CEE CENTRO',
      city: 'Rio De Janeiro',
      state: 'RJ',
    },
  },
  {
    status: 'Objeto saiu para entrega ao destinatário',
    datetime: {
      date: {
        day: 4,
        month: 2,
        year: 2020,
      },
      time: {
        hour: 11,
        minute: 38,
      },
    },
    locale: {
      place: 'CEE CENTRO',
      city: 'Rio De Janeiro',
      state: 'RJ',
    },
  },
  {
    status: 'Objeto encaminhado ',
    datetime: {
      date: {
        day: 2,
        month: 2,
        year: 2020,
      },
      time: {
        hour: 9,
        minute: 51,
      },
    },
    from: {
      place: 'CTE BENFICA',
      city: 'Rio De Janeiro',
      state: 'RJ',
    },
    to: {
      place: 'CEE CENTRO',
      city: 'Rio De Janeiro',
      state: 'RJ',
    },
  },
  {
    status: 'Objeto encaminhado ',
    datetime: {
      date: {
        day: 1,
        month: 2,
        year: 2020,
      },
      time: {
        hour: 10,
        minute: 57,
      },
    },
    from: {
      place: 'CTE BENFICA',
      city: 'Rio De Janeiro',
      state: 'RJ',
    },
    to: {
      place: 'CEE CENTRO',
      city: 'Rio De Janeiro',
      state: 'RJ',
    },
  },
  {
    status: 'Objeto encaminhado ',
    datetime: {
      date: {
        day: 31,
        month: 1,
        year: 2020,
      },
      time: {
        hour: 11,
        minute: 1,
      },
    },
    from: {
      place: 'CTCE CURITIBA',
      city: 'Curitiba',
      state: 'PR',
    },
    to: {
      place: 'CTE BENFICA',
      city: 'Rio De Janeiro',
      state: 'RJ',
    },
  },
  {
    status: 'Objeto encaminhado',
    datetime: {
      date: {
        day: 30,
        month: 1,
        year: 2020,
      },
      time: {
        hour: 8,
        minute: 52,
      },
    },
    from: {
      place: 'AC ASSIS CHATEAUBRIAND',
      city: 'Assis Chateaubriand',
      state: 'PR',
    },
    to: {
      place: 'CTCE CURITIBA',
      city: 'Curitiba',
      state: 'PR',
    },
  },
  {
    status: 'Objeto postado após o horário limite da unidade',
    datetime: {
      date: {
        day: 29,
        month: 1,
        year: 2020,
      },
      time: {
        hour: 16,
        minute: 46,
      },
    },
    locale: {
      place: 'AC ASSIS CHATEAUBRIAND',
      city: 'Assis Chateaubriand',
      state: 'PR',
    },
  },
]

export const postedStatuses = [
  {
    status: 'Objeto postado após o horário limite da unidade',
    datetime: {
      date: {
        day: 29,
        month: 1,
        year: 2020,
      },
      time: {
        hour: 16,
        minute: 46,
      },
    },
    locale: {
      place: 'AC ASSIS CHATEAUBRIAND',
      city: 'Assis Chateaubriand',
      state: 'PR',
    },
  },
]

export default [
  {
    title: 'iPhone 7',
    code: 'PW086958109BR',
    mode: 'SEDEX',
    statuses,
    lastView: new Date(2020, 2, 4, 18, 13),
    lastUpdate: new Date(2020, 2, 3, 18, 13),
  },
  {
    title: 'iPad',
    code: 'PW086958114BR',
    mode: 'SEDEX',
    statuses: postedStatuses,
    lastView: new Date(2020, 3, 7, 16, 46),
    lastUpdate: new Date(2020, 3, 6, 16, 46),
  },
]
