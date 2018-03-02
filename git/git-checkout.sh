# Copiando un commit de una rama a otra:
# Usaremos un ejemplo en el que queremos copiar un commit de la "rama-b" a la "rama-a"

# 1. Nos movemos a la "rama-b"
$ git checkout rama-b

# 2. Obtenemos el código SHA del commit que necesitamos copiar
$ git log --oneline

3ed31a3 (HEAD -> master, origin/master) 🎨 Structure of the code (change for instagram)
6255612 ✨ background-blend-mode
67b849e 🚚 Move all files to folders
18913d9 ✨ devicelight event
(END)

# 3. Regresamos a la "rama-a"
$ git checkout rama-a

# 4. Usamos cherry-pick
$ git cherry-pick 3ed31a3

# Extra: Si llegamos a tener conflictos, tenemos que hacer lo mismo que con un "merge".
# Corregir los archivos con los que tengas problemas.

$ git add -A

$ git cherry-pick --continue