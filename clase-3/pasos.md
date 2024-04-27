SI EMPIEZO DESDE 0:
* git init + enter
* git add . (esto agrega todos los archivos del directorio actual a git)
* git commit -m "Inicio de proyecto" + Enter         
* git  remote add origin https://github.com/usuario/proyecto.git         
* git  push -u origin master                              

PARA HACER UN CAMBIO Y SUBIRLO A GITHUB (ACTUALIZAR):  
1. Modifica algún archivo o agrega uno nuevo.   
2. Abre una terminal y ve al directorio donde se encuentra tu repositorio local.        
3. Agrega tus cambios con este comando:          
   * git add nombre_del_archivo              
4. Confirma esos cambios con este comando:                      
   * git commit -m "Mensaje descriptivo de lo que has hecho"    
   * git push 

SI ME EQUIVOQUE AL PONER GIT REMOTE USAMOS EL COMANDO:
* git remote  set-url origin <URL CORRECTA>    

PARA OBTENER INFO DETLLADA DEL ESTADO DE MI REPO:
* git status

PARA VER EL ORIGEN REMOTO:
* git remote -v

