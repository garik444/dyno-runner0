body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
  overflow: hidden;
  font-family: Arial, sans-serif;
}

.game {
  width: 600px;
  height: 200px;
  border-bottom: 2px solid #000;
  position: relative;
  background-color: #fff;
  overflow: hidden;
}

#dino {
  width: 40px;
  height: 40px;
  background-color: #444;
  position: absolute;
  bottom: 0;
  left: 50px;
}

.cactus {
  width: 25px;
  height: 40px;
  background-color: green;
  position: absolute;
  bottom: 0;
  right: -30px;
}

#score {
  position: absolute;
  top: 10px;
  right: 15px;
  font-weight: bold;
  font-size: 18px;
}

.jump {
  animation: jump 0.5s linear;
}

@keyframes jump {
  0% { bottom: 0; }
  50% { bottom: 80px; }
  100% { bottom: 0; }
}

