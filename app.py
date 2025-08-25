# filepath: c:\Users\AML-lVB\Desktop\Pagina del grupo\app.py
from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///usuarios.db'
db = SQLAlchemy(app)

class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100))
    apellido = db.Column(db.String(100))
    correo = db.Column(db.String(100), unique=True)
    contraseña = db.Column(db.String(100))

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        correo = request.form['email']
        contraseña = request.form['password']
        usuario = Usuario.query.filter_by(correo=correo, contraseña=contraseña).first()
        if usuario:
            return redirect(url_for('index'))
        else:
            return render_template('login.html', error="Datos incorrectos")
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        nombre = request.form['nombres']
        apellido = request.form['apellidos']
        correo = request.form['correo']
        contraseña = request.form['contraseña']
        nuevo_usuario = Usuario(nombre=nombre, apellido=apellido, correo=correo, contraseña=contraseña)
        db.session.add(nuevo_usuario)
        db.session.commit()
        return redirect(url_for('login'))
    return render_template('Register.html')

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)

    