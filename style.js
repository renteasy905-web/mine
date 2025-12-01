* { margin:0; padding:0; box-sizing:border-box; }
body, html { height:100%; font-family: 'Poppins', sans-serif; }

.page {
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  overflow: hidden;
}

.bg-image {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
}

.page::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(10, 20, 45, 0.72);
  z-index: -1;
}

.content {
  z-index: 2;
  padding: 20px;
}

h1 {
  font-family: 'Dancing Script', cursive;
  font-size: 6rem;
  margin-bottom: 20px;
  text-shadow: 0 5px 20px rgba(0,0,0,0.8);
}

h1 span { color: #64b5f6; }

p {
  font-size: 1.7rem;
  text-shadow: 0 2px 10px rgba(0,0,0,0.9);
}

.btn {
  display: inline-block;
  margin-top: 50px;
  padding: 20px 60px;
  background: #64b5f6;
  color: white;
  font-size: 2rem;
  font-weight:bold;
  border-radius: 60px;
  text-decoration: none;
  box-shadow: 0 15px 35px rgba(0,0,0,0.5);
  transition: all 0.4s;
}

.btn:hover {
  background: #42a5f5;
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0,0,0,0.6);
}

.arrow {
  margin-top: 80px;
  font-size: 3.5rem;
  color: #64b5f6;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-25px); }
}

@media (max-width: 768px) {
  h1 { font-size: 4rem; }
  .btn { padding: 16px 40px; font-size: 1.6rem; }
  p { font-size: 1.4rem; }
}
