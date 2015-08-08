#Clase - 03
- ###Se aprendieron los comandos de bash:
    + **cd** : Abrir Directorio
    + **mkdir** : Crear Directorio
    + **mv** : Mover/Renombrar Directorio
    + **rm** : Borrar Directorio
    + **pwd** : Muestra la ruta actual

- ###Se creo un repositorio en Git y se asocio con un remoto en GitHub
    + **git config** : Configuracion realizada Git
        * **--list** : Se debe utilizar para mostrar la lista
        * **--global** : setea la configuracion para todos los repositorios. Si esta instruccion se omite, la configuracion sea unicamente para el repositorio
    
    + **git init** : Crea un repositorio local
    
    + **git add** : Agregar archivos nuevos al caché
    
    + **git rm** : Quita archivos del caché
        * **--chached** : Se debe utilizar para indicar el directorio o archivo a quitar
        * **-r** : Si es un directorio, se puede utilizar esta instruccion para quitar todos los archivos del mismo
    
    + **git commit** : Guarda archivos añadidos y modificados del caché al repo local
        * se debe usar **-m** y escribir un texto descriptivo del commit con ""
        * Se puede indicar un directorio o archivo al que se le desea realizar el commit
    
    + **git push** : Envia un repo local al repo remoto
        * **-u** : Se debe utilizar para indicar el repo origen y repo destino (en el caso de estar modificando un branch, usar el nombre del branch)
    
    + **git pull** : Baja un repo remoto a un repo local y hace el merge
    
    + **git branch** : crea una rama nueva del repo para poder realizar modificaciones sin tener que modificar el master
        * **-v** : Muestra una lista con los branch existentes en el repo y señala con un * el branch actual
    
    + **git checkout** : Se mueve entre ramas para poder hacer modificaciones
        * **-b** : crea un branch y se mueve al mismo
    
    + **git clone** : Clona un repo remoto a uno local

    + **git merge** : Une 2 ramas de un repositorio

    + **git status** : Muestra el estado del repositorio Git

    + **git log** : Muestra el log con los commits realizados