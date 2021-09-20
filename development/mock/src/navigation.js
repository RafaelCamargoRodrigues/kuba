import placeholder from './assets/placeholder_135x135.svg'

export default function () {
  const thumbnail = placeholder

  return Promise.resolve({
    title: 'Vivamus nulla erat, interdum',
    categories: [
      {
        thumbnail,
        title: 'Integer ultrices',
        url: '/departament/category'
      },
      {
        thumbnail,
        title: 'Praesent faucibus',
        url: '/departament/category'
      },
      {
        thumbnail,
        title: 'Cras id',
        url: '/departament/category'
      },
      {
        thumbnail,
        title: 'Vestibulum nibh',
        url: '/departament/category'
      },
      {
        thumbnail,
        title: 'Integer id',
        url: '/departament/category'
      },
      {
        thumbnail,
        title: 'Aenean vitae',
        url: '/departament/category'
      },
      {
        thumbnail,
        title: 'In non',
        url: '/departament/category'
      },
      {
        thumbnail,
        title: 'Sed pharetra',
        url: '/departament/category'
      }
    ]
  })
}