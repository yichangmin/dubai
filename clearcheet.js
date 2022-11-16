const { readFileSync, writeFileSync, copyFileSync, renameSync } = require('fs');
const { execSync } = require('child_process');

// https://github.com/changesets/changesets/issues/432
// 이슈참고

// 워크스페이스 리스트를 가지고 온다.
const wsOutput = execSync('yarn workspaces list --json', {
  encoding: 'utf-8',
});

// 워크스페이스의 패키지를 돌면서 Map생성
const workspaceVersionMap = Object.fromEntries(
  wsOutput
    // 개행으로 스플릿
    .split('\n')
    // 마지막 개행등 빈요소 필터링
    .filter((string) => Boolean(string))
    // Parse JSON strings
    .map((string) => JSON.parse(string))
    // name, location 배열생성
    .map(({ location, name }) => [name, { location }])
);

// workspace:* 버전 변경(종속버전)
for (const pkg in workspaceVersionMap) {
  const { location } = workspaceVersionMap[pkg];
  // 백업을 복구한다.
  renameSync(`${location}/original.json.backup`, `${location}/package.json`);
}
