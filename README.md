# Hyakunin Isshu

A simple Node.js module that outputs random poems or specific poems from the classical Japanese anthology "Hyakunin Isshu" (One Hundred Poems by One Hundred Poets) to the console.

## Installation

You can install and use the `hyakunin-isshu` package via `npx`. There's no need to install it globally.

```bash
npx hyakunin-isshu [options]
```

## Usage

### Display a Random Poem

By default, running the command without any options will display a random poem from the anthology.

```bash
npx hyakunin-isshu
```

Example output:

```
No.01: 秋の田の かりほの庵の 苫をあらみ 我が衣手は 露にぬれつつ 🌾🌙💧
漢字: 秋の田の かりほの庵の 苫をあらみ 我が衣手は 露にぬれつつ
仮名: あきのたの かりほのいほの とまをあらみ わがころもでは つゆにぬれつつ
```

### Display a Specific Poem by Number

You can display a specific poem by passing its number using the `--no` option.

```bash
npx hyakunin-isshu --no 1
```

Example output:

```
No.01: 秋の田の かりほの庵の 苫をあらみ 我が衣手は 露にぬれつつ 🌾🌙💧
```

### List All Poems

You can list all the poems in the anthology in a text format using the `--list` option.

```bash
npx hyakunin-isshu --list
```

Example output:

```
01: 秋の田の かりほの庵の 苫をあらみ 我が衣手は 露にぬれつつ 🌾🌙💧
02: 春過ぎて 夏来にけらし 白妙の 衣ほすてふ 天の香具山 🌸🌿⛰️
...
```

### List All Poems in JSON Format

You can list all the poems in a JSON format using the `--list --json` options.

```bash
npx hyakunin-isshu --list --json
```

Example output:

```json
[
  {
    "number": "01",
    "kanji": "秋の田の かりほの庵の 苫をあらみ 我が衣手は 露にぬれつつ",
    "kana": "あきのたの かりほのいほの とまをあらみ わがころもでは つゆにぬれつつ",
    "author": {
      "kanji": "天智天皇",
      "kana": "てんじてんのう"
    },
    "emojis": "🌾🌙💧"
  },
  ...
]
```

### Search Poems by Keyword

You can search for poems that contain a specific keyword in either the kanji or kana text, or the author's name, using the `--search` option.

```bash
npx hyakunin-isshu --search 月
```

Example output:

```
No.07: 天の原 ふりさけみれば 春日なる 三笠の山に いでし月かも 🌌🌕⛰️
```

### Show Help

To display help and see all available options, use the `--help` option.

```bash
npx hyakunin-isshu --help
```

## Docker

You can also run the `hyakunin-isshu` package using Docker. This is useful if you prefer not to install Node.js and the package locally.

### Build the Docker Image

First, create a `Dockerfile` with the following content:

```Dockerfile
# Use Node.js v20 as the base image
FROM node:20

# Create and set the working directory inside the container
WORKDIR /app

# Install the `hyakunin-isshu` package globally
RUN npm install -g hyakunin-isshu

# Set the default command to execute `npx hyakunin-isshu`
# This allows you to run `npx hyakunin-isshu` directly when you start the container
ENTRYPOINT ["npx", "hyakunin-isshu"]
```

Then, build the Docker image:

```bash
docker build -t hyakunin-isshu-image .
```

### Run the Docker Container

To display a random poem:

```bash
docker run --rm hyakunin-isshu-image
```

To display a specific poem by number:

```bash
docker run --rm hyakunin-isshu-image --no 1
```

To list all poems:

```bash
docker run --rm hyakunin-isshu-image --list
```

To list all poems in JSON format:

```bash
docker run --rm hyakunin-isshu-image --list --json
```

To search for poems by keyword:

```bash
docker run --rm hyakunin-isshu-image --search 月
```

## License

This project is licensed under the MIT License.
