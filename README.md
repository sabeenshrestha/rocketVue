# rocket

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

Basic Structure

<app>
    <rockets>
        <new-rocket-form
            :addRocket:"addRocket">
        </new-rocket-form>
        <rocket-list
            :rockets="rockets"
            :removeRocket="removeRocket">
            <rocket
                :rocket="rocket"
                :removeRocket="removeRocket">
            </rocket>        
            </rocket-list>
    </rockets>
</app>    # rocketVue
