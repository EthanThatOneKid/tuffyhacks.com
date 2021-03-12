const EXTERNAL_SCHEDULE_URL =
  'https://www.notion.so/440f7327a62a48ceb15c22fc1c445483?v=63d1c6fb62004b3d904654f4b9991287';

module.exports = {
  redirects: async () => [
    { source: '/schedule', destination: EXTERNAL_SCHEDULE_URL, permanent: true }
  ]
};
