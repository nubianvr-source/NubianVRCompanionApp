const stories = [
  {
    username: 'Trinadh',
    profile: 'https://avatars2.githubusercontent.com/u/45196619?s=460&v=4',
    title: 'My Gallery',
    stories: [
      {
        id: 1,
        url:
          'https://firebasestorage.googleapis.com/v0/b/nubianvr-companion-app.appspot.com/o/OnlineSafetyVideos%2FInteractiveSlides001.png?alt=media&token=e45cb66d-5fce-4d8d-974f-28a910c5f19a',
        type: 'image',
        duration: 2,
        isReadMore: false,
      },
      {
        id: 2,
        url:
          'https://firebasestorage.googleapis.com/v0/b/nubianvr-companion-app.appspot.com/o/OnlineSafetyVideos%2Foutput_1.mp4?alt=media&token=9cd2d8f6-6619-4e79-819d-35df5788dfc5',
        type: 'video',
        duration: 2,
        isReadMore: false,
      },
      {
        id: 3,
        url:
          'https://firebasestorage.googleapis.com/v0/b/nubianvr-companion-app.appspot.com/o/OnlineSafetyVideos%2Foutput_2.mp4?alt=media&token=2788b87a-d143-4bbd-a8bc-d9347c2d5098',
        type: 'video',
        duration: 2,
        isReadMore: false,
      },
      {
        id: 4,
        url:
          'https://firebasestorage.googleapis.com/v0/b/nubianvr-companion-app.appspot.com/o/OnlineSafetyVideos%2Foutput_3.mp4?alt=media&token=7e5095d8-85a8-4f6d-bc32-7ea77779e9c1',
        type: 'video',
        duration: 2,
        isReadMore: false,
      },
      {
        id: 5,
        url:
          'https://firebasestorage.googleapis.com/v0/b/nubianvr-companion-app.appspot.com/o/OnlineSafetyVideos%2Foutput_4.mp4?alt=media&token=71a580ee-1008-4b28-87e4-1e04f8a41f2e',
        type: 'video',
        duration: 2,
        isReadMore: false,
      },
      {
        id: 6,
        url:
          'https://firebasestorage.googleapis.com/v0/b/nubianvr-companion-app.appspot.com/o/OnlineSafetyVideos%2Foutput_5.mp4?alt=media&token=af25aae9-f79c-47bb-a238-dac9ef99fbe2',
        type: 'video',
        duration: 2,
        isReadMore: false,
      },
      {
        id: 7,
        url:
          'https://firebasestorage.googleapis.com/v0/b/nubianvr-companion-app.appspot.com/o/OnlineSafetyVideos%2Foutput_6.mp4?alt=media&token=42c4a518-e089-423f-90ae-95993da75f4b',
        type: 'video',
        duration: 2,
        isReadMore: false,
      },
      {
        id: 8,
        url:
          'https://firebasestorage.googleapis.com/v0/b/nubianvr-companion-app.appspot.com/o/OnlineSafetyVideos%2Foutput_7.mp4?alt=media&token=15320451-ab0e-433b-8454-528ddb40ed51',
        type: 'video',
        duration: 2,
        isReadMore: false,
      },
      {
        id: 9,
        url:
          'https://firebasestorage.googleapis.com/v0/b/nubianvr-companion-app.appspot.com/o/IMG_4746.JPG?alt=media&token=b08c0dee-d985-4fb4-a3eb-662cc86f42ea',
        type: 'image',
        duration: 2,
        isSeen: false,
        isReadMore: false,
        isPaused: true,
      },
      {
        id: 10,
        url:
          'https://firebasestorage.googleapis.com/v0/b/nubianvr-companion-app.appspot.com/o/IMG_4747.jpg?alt=media&token=16beae1e-0672-4992-91be-d9d281fdb18b',
        type: 'image',
        duration: 3,
        isSeen: false,
        isReadMore: false,
        isPaused: true,
      },
      {
        id: 11,
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
  /*{
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
  */
];

export default stories;
