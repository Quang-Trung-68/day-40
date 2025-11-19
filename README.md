# Day 40 - React Redux

Ứng dụng React minh họa quản lý state với Redux, bao gồm danh sách người dùng và bài viết.

## 🚀 Demo Trực Tuyến

**[Xem Demo](https://day-40-wine.vercel.app/)**

## 🛠️ Công Nghệ

- **React** 19.1.1
- **Redux** 5.0.1
- **React Router** 7.9.6
- **Axios** để gọi API
- **Vite** công cụ build

## 📦 Tính Năng

- Danh sách người dùng với thông tin chi tiết
- Danh sách bài viết từ JSONPlaceholder API
- Quản lý state với Redux
- Thiết kế responsive
- Hiển thị trạng thái loading

## 🏃 Bắt Đầu

### Cài Đặt

```bash
npm install
```

### Chạy Development

```bash
npm run dev
```

## 📁 Cấu Trúc Dự Án

```
src/
├── features/      # Các feature Redux (user, post, address, product)
├── pages/         # Các component trang
├── services/      # API services và hooks
├── store/         # Cấu hình Redux store
└── utils/         # Hàm tiện ích (httpRequest)
```

## 🌐 API

Sử dụng [JSONPlaceholder](https://jsonplaceholder.typicode.com/) cho dữ liệu demo.
