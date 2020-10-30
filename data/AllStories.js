const stories = [
  {
    username: 'Amit',
    title: 'Pune Dairies',
    profile: 'https://avatars0.githubusercontent.com/u/16208872?s=460&v=4',
    stories: [
      {
        id: 1,
        url:
          'https://images.unsplash.com/photo-1532579853048-ec5f8f15f88d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        type: 'image',
        duration: 2,
        isReadMore: true,
      },
    ],
  },
  {
    username: 'Trinadh',
    profile: 'https://avatars2.githubusercontent.com/u/45196619?s=460&v=4',
    title: 'My Gallery',
    stories: [
      {
        id: 1,
        url:
          'https://firebasestorage.googleapis.com/v0/b/nubianvr-companion-app.appspot.com/o/IMG_6351.mp4?alt=media&token=e5e190b6-1068-465e-8024-1ce8b77b3e36',
        type: 'video',
        duration: 2,
        isReadMore: false,
      },
      {
        id: 2,
        url:
          'https://firebasestorage.googleapis.com/v0/b/nubianvr-companion-app.appspot.com/o/IMG_6352.mp4?alt=media&token=c960ba32-2264-4f51-beb5-f692b8d52ee4',
        type: 'video',
        duration: 2,
        isReadMore: false,
      },
      {
        id: 3,
        url:
          'https://firebasestorage.googleapis.com/v0/b/nubianvr-companion-app.appspot.com/o/IMG_6353.mp4?alt=media&token=e0f6d29d-a648-4a69-b45f-a22975d60c4f',
        type: 'video',
        duration: 2,
        isReadMore: false,
      },
      {
        id: 4,
        url:
          'https://firebasestorage.googleapis.com/v0/b/nubianvr-companion-app.appspot.com/o/IMG_6354.mp4?alt=media&token=d5fe44cd-9128-4266-96fe-64a97f754b4b',
        type: 'video',
        duration: 2,
        isReadMore: false,
      },
      {
        id: 5,
        url:
          'https://firebasestorage.googleapis.com/v0/b/nubianvr-companion-app.appspot.com/o/IMG_6355.mp4?alt=media&token=83c1ddc1-3add-4e60-b656-f636357e4b3b',
        type: 'video',
        duration: 2,
        isReadMore: false,
      },
      {
        id: 6,
        url:
          'https://firebasestorage.googleapis.com/v0/b/nubianvr-companion-app.appspot.com/o/IMG_6356.mp4?alt=media&token=a364cce8-cf15-4d74-b83c-241858bc4941',
        type: 'video',
        duration: 2,
        isReadMore: false,
      },
      {
        id: 7,
        url:
          'https://firebasestorage.googleapis.com/v0/b/nubianvr-companion-app.appspot.com/o/IMG_6357.mp4?alt=media&token=a3b1cbef-45a1-46ef-bb53-b1d331e76723',
        type: 'video',
        duration: 2,
        isReadMore: false,
      },
      {
        id: 8,
        url:
          'https://firebasestorage.googleapis.com/v0/b/nubianvr-companion-app.appspot.com/o/IMG_4746.JPG?alt=media&token=b08c0dee-d985-4fb4-a3eb-662cc86f42ea',
        type: 'image',
        duration: 2,
        isSeen: false,
        isReadMore: false,
        isPaused: true,
      },
      {
        id: 9,
        url:
          'https://firebasestorage.googleapis.com/v0/b/nubianvr-companion-app.appspot.com/o/IMG_4747.jpg?alt=media&token=16beae1e-0672-4992-91be-d9d281fdb18b',
        type: 'image',
        duration: 3,
        isSeen: false,
        isReadMore: false,
        isPaused: true,
      },
      {
        id: ,
        url:
          'https://firebasestorage.googleapis.com/v0/b/nubianvr-companion-app.appspot.com/o/IMG_4748.JPG?alt=media&token=88fb1246-a98b-4feb-9598-c4c468bfcccd',
        type: 'image',
        duration: 3,
        isSeen: false,
        isReadMore: false,
        isPaused: true,
      },
    ],
  },
  {
    username: 'Steve Jobs',
    profile:
      'https://s3.amazonaws.com/media.eremedia.com/uploads/2012/05/15181015/stevejobs.jpg',
    title: ' Beach Moves',
    stories: [
      {
        id: 1,
        url:
          'https://images.unsplash.com/photo-1515578706925-0dc1a7bfc8cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        type: 'image',
        duration: 2,
        isReadMore: true,
      },
      {
        id: 3,
        url:
          'https://images.unsplash.com/photo-1496287437689-3c24997cca99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        type: 'image',
        duration: 2,
        isSeen: false,
        isReadMore: true,
        isPaused: true,
      },
      {
        id: 4,
        url:
          'https://images.unsplash.com/photo-1514870262631-55de0332faf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        type: 'image',
        duration: 2,
        isSeen: false,
        isReadMore: true,
        isPaused: true,
      },
    ],
  },
  {
    username: 'Rahul',
    profile:
      'https://images.unsplash.com/profile-1531581190171-0cf831d86212?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
    title: 'Beauties @Beach',
    stories: [
      {
        id: 4,
        url:
          'https://images.unsplash.com/photo-1512101176959-c557f3516787?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        type: 'image',
        duration: 2,
        isReadMore: true,
      },
      {
        id: 5,
        url:
          'https://images.unsplash.com/photo-1478397453044-17bb5f994100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        type: 'image',
        duration: 2,
        isSeen: false,
        isReadMore: true,
        isPaused: true,
      },
      {
        id: 4,
        url:
          'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=581&q=80',
        type: 'image',
        duration: 2,
        isSeen: false,
        isReadMore: true,
        isPaused: true,
      },
    ],
  },
];

export default stories;
