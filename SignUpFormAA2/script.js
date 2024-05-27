@font-face {
    font-family: 'Minecraft';
    src: url('Minecraft.ttf') format('truetype');
}

body {
    font-family: 'Minecraft', sans-serif;
    background-color: #87ceeb; /* Sky blue background */
    margin: 0;
    padding: 20px;
    background-image: url('minecraft-background.png'); /* Minecraft background */
    background-size: cover;
    color: #333;
}

.container {
    max-width: 600px;
    margin: 0 auto;
    background-color: #d4d4d4; /* Stone color */
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
}

fieldset {
    border: 2px solid #8B4513; /* Dark brown border */
    padding: 20px;
    border-radius: 10px;
}

legend {
    font-weight: bold;
    padding: 0 10px;
    background-color: #8B4513;
    color: white;
    border-radius: 5px;
    padding: 5px 10px;
}

label {
    display: block;
    margin: 10px 0 5px;
}

input[type="text"], input[type="email"], input[type="password"], textarea, select {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    font-family: 'Minecraft', sans-serif;
}

textarea {
    height: 100px;
}

input[type="submit"], input[type="reset"] {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
    font-family: 'Minecraft', sans-serif;
}

input[type="submit"] {
    background-color: #3CB371; /* Medium Sea Green */
    color: white;
}

input[type="reset"] {
    background-color: #B22222; /* Firebrick */
    color: white;
}

.output {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
    font-family: 'Minecraft', sans-serif;
    color: #333;
}