docker build -t alcala/al-dia/back .
docker run -d --env-file=.env -p3001:3001 alcala/al-dia/back