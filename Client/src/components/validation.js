export default function validate (userData) {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const valPassword = /\d/
    const errors = {}
    if (!userData.email) {errors.email = 'Se requiere un correo electrónico'}
    if (!regexEmail.test(userData.email)) {errors.email = 'Debe ser un correo electrónico'}
    if (userData.email.length > 35) {errors.email = 'El correo electrónico no puede tener más de 35 caracteres'}
    if (userData.password.length < 6 || userData.password.length > 10) {errors.password = 'La contraseña tiene que tener una longitud entre 6 y 10 caracteres'}
    if (!valPassword.test(userData.password)) {errors.password = 'La contraseña tiene que tener al menos un número'}
    return (errors)
  }