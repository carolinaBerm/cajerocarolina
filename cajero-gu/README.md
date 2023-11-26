# Cajero GU
Grupo Unión, es una pequeña cooperativa que está creciendo en el mercado financiero, y desea
tener una aplicación que le permita realizar todas las transacciones. En este momento está
cotizando con la mejor empresa, entonces la idea es presentarle una propuesta inicial
Necesidades:

1. Debe existir una funcionalidad que permita consultar saldo
2. Debe existir la funcionalidad de retirar dinero
3. Debe existir la funcionalidad de transferir cuenta (a otra cuenta, la cual debe estar ya registrada)
4. Debe existir la funcionalidad que permita consignar dinero a la cuenta propia
5. Se existir la funcionalidad de inicio de sesión y cierre de sesión
6. Debe existir la posibilidad de registro
7. Implementar validaciones con expresiones regulares

# Condiciones de desarrollo y funcionalidad:
• El registro de la cuenta se debe realizar solamente si se hace una apertura de cuenta con mínimo 100000
• El inicio de sesión debe permitir máximo 3 intentos por credenciales. Si se equivoca 3 veces se debe mostrar un mensaje de error y bloquear el formulario de acceso
• El registro de usuario debe pedir una confirmación de contraseña para poder guardar el usuario
• La transferencia a otra cuenta debe ser solamente a las cuentas registradas dentro de la aplicación
• Es necesario mostrar el historial de todos los movimientos que se haga (consultas, transferencias consignaciones y retiros) mostrando fecha, movimiento y el valor
• Cada vez que se haga un movimiento (se debe mostrar el comprobante o resumen del movimiento)
• Realizar validación de campos con expresiones regulares
• No puede haber menos de 10000 en las cuentas
• La consignación a cuenta propia o transferencias mínimo debe ser por valor de 10000
• El cierre de sesión solo cierra la sesión activa, pero debe mostrar nuevamente el formulario de ingreso (no puede finalizar la ejecución de la aplicación)