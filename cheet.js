const { readFileSync, writeFileSync, copyFileSync } = require('fs');
const { execSync } = require('child_process');

// https://github.com/changesets/changesets/issues/432
// 이슈참고

// 워크스페이스 리스트를 가지고 온다.
const wsOutput = execSync('yarn workspaces list --json', {
  encoding: 'utf-8',
});

// package.json에 수정해야하는 항목들
const DEP_TYPES_TO_UPDATE = ['dependencies', 'devDependencies', 'peerDependencies'];

// package 파일 read
const getPackageFile = (location) => JSON.parse(readFileSync(`${location}/package.json`));

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
    .map(({ location, name }) => [name, { location, version: getPackageFile(location).version }])
);

// workspace:* 버전 변경(종속버전)
for (const pkg in workspaceVersionMap) {
  const { location } = workspaceVersionMap[pkg];

  // 백업을 생성한다.
  copyFileSync(`${location}/package.json`, `${location}/original.json.backup`);

  // 패키지 파일을 읽어온다.
  const packageFile = getPackageFile(location);

  const mutuateDeps = (depType) => {
    for (const dep in packageFile[depType]) {
      if (Object.keys(workspaceVersionMap).includes(dep)) {
        packageFile[depType][dep] = workspaceVersionMap[dep].version;
      }
    }
  };

  DEP_TYPES_TO_UPDATE.map((dependencyType) => mutuateDeps(dependencyType));

  writeFileSync(`${location}/package.json`, `${JSON.stringify(packageFile, null, 2)}\n`);
}
