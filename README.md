# Basic setup
Updating...
## Get started
```
yarn bootstrap
```
This should run `yarn install` as well

## Scopes
Were defined in [`lerna.json`](./lerna.json).

## Run a command
### For all packages
```
lerna run script-name
```
### For a specific package
```
lerna run script-name --scope=@aha/rms
```

## How to add a dependency
### Add a dependency to all packages
```
lerna add package-name
```
### Add a dependency to a specific package
```
lerna add package-name --scope=@aha/rms
```

## Reset
After remove a dependency or fix a potential bundling issue. Try run the combination:
```
yarn clean
yarn bootstrap
```
