const links = {
  "/schedule": 'https://www.notion.so/440f7327a62a48ceb15c22fc1c445483?v=63d1c6fb62004b3d904654f4b9991287',
  "/guide": "https://www.notion.so/TuffyHacks-Camper-Guide-b6d48f4c0ccb40d0b3a32aef02cc51eb",
  "/activities": "https://www.notion.so/Activities-4eefbfa9c8d442e489ad5ab6830abcdd",
  "/trails": "https://www.notion.so/Trails-5aead207c2f84387969b8b2ff5049d90",
  "/submissions": "https://www.notion.so/Project-Submission-Judging-6dadfbbc335c468ea08bbf4f8200ad8f",
  "/mentors": "https://www.notion.so/Mentors-72e2a7e1685e4e83bac43f6f579f5cce"
};

module.exports = {
  redirects: async () => Object.entries(links).map(([source, destination]) => ({ source, destination, permanent: true }))
};
