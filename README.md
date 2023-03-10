# **\_test_crud_redux-saga**

# тестовое задание

# в разработке

## Описание проекта:

Создать CRUD приложение с авторизацией, React 17, redux-saga, connected-react-router

### Технический стек

- [x] React 17
- [x] Redux + Redux-saga
- [x] React Router DOM, реализация routing
- [x] connected-react-router
- [x] Bootstrap
- [x] react-toastify
- [x] Eslint, prettier

# Структура приложения и функционал

### 1. Главная страница:

- доступ без авторизации
- регистрация

### 2. Страница Dashboard:

- доступ только авторизованным
- форма создания нового поста (в select подгружены все авторы, отдельным списком вынесены все существующие теги)
- список всех существующих постов с возможностью удалить пост или просмотреть
- пагинация

### 3. Страница поста:

- доступ только авторизованным
- форма, заполненная полученными данными поста с возможностью редактирования

### Аутентификация:

- токены доступа
- axios interceptors

### Зарегистрированный пользователь может:

- просмотреть список постов, авторов, тегов
- добавить пост
- снять пост с публикации
- редактировать пост
