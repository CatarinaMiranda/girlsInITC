export const config = {
  "dev": {
    "username": "udagramjoanadev",
    "password": "udagramjoanadev155",
    "database": "udagramjoanadev",
    "host": "udagramjoanadev.c3kbifce4ql9.us-east-2.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_reigion": "us-east-2",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-joana-dev",
    "url": process.env.URL
  },
  "prod": {
    "username": "udagramjoanadev",
    "password": "udagramjoanadev155",
    "database": "udagramjoanadev",
    "host": "udagramjoanadev.c3kbifce4ql9.us-east-2.rds.amazonaws.com",
    "dialect": "postgres",
  },
  "jwt": {
    "secret": "hello"
  }
}