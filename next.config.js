/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: async () => {
    return 'healthcare-ai-agent-demo-v1.0'
  }
}

module.exports = nextConfig