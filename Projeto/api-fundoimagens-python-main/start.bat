@echo off
REM Isso acima faz ele nao replicar os comandos na tela
echo "========[ TRABALHO DE ENGENHARIA DE SOFTWARE ]========="
echo "Iniciando..."
echo "Grupo: Márlon Bento"
echo "Se nao existir, altere os SET abaixo no .bat:"

REM Altere abaixo com o caminho absoluto do php.exe
set CAMINHO_PYTHON=pip

where /q pip
IF %ERRORLEVEL% NEQ 0 (
	echo "PIP nao foi encontrado, instale o Python PIP e altere o batch ou"
	echo "adicione o caminho ao PIP no PATH do sistema"
	pause
	exit /b 1
)ELSE (
	echo "Python detectado com sucesso"
)
echo "Vamos abrir o servidor pelo Flask"
cd ".\backend"
REM flask run
echo "Comando: flask run"
cmd /k "flask run"
