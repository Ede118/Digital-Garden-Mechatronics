To synchroniza the repository with the cloud & upload the pages to GitHub pages (the so called Digital Garden)

```
npx quartz sync
```

Once changes have been made in relation with visuals, layouts and the likes, the server has to be rebuild. Hence:

```
npx quartz build --serve
```