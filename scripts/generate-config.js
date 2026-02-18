const fs = require('fs');
const { execSync } = require('child_process');

function getGitConfig(key) {
  try {
    return execSync(`git config ${key}`).toString().trim();
  } catch (e) {
    return '';
  }
}

const config = {
  TITLE: '使用 spec-kit 進行 SDD 開發',
  SUBTITLE: '投影片封面範例',
  AUTHOR: process.env.GIT_AUTHOR_NAME || getGitConfig('user.name') || 'Unknown Author',
  EMAIL: process.env.GIT_AUTHOR_EMAIL || getGitConfig('user.email') || 'no-email@example.com'
};

let template = fs.readFileSync('slides/00-cover.template.md', 'utf8');

Object.keys(config).forEach(key => {
  template = template.replace(new RegExp(`{{${key}}}`, 'g'), config[key]);
});

fs.writeFileSync('slides/00-cover.md', template);
fs.writeFileSync('config.json', JSON.stringify(config, null, 2));
console.log('Generated slides/00-cover.md from template with:', config);
