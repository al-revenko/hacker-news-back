## Установка

#### Клонируем репозиторий:

```bash
git clone https://github.com/al-revenko/hacker-news-back.git
```

или

```bash
git clone -b feature https://github.com/al-revenko/hacker-news-back.git
```

#### В папке проекта используем [yarn](https://yarnpkg.com/) для установки зависимостей:

```bash
yarn
```

#### Создаём .env файл в корне проекта и копируем в него содержимое файла .env.example:

```bash
API_URL = "https://api.hnpwa.com/v0/" 
HOST = "localhost"
PORT = "4000"
```

## Запуск dev сервера

```bash
yarn dev
```

