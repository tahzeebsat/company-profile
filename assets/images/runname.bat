@echo off
setlocal enabledelayedexpansion

rem Folder ka path dein
set "folder_path=C:\xampp\htdocs\SAT\public\assets\images\car-images"

rem Loop through sabhi files
for %%F in ("%folder_path%\*") do (
    rem Extract the filename and extension
    set "old_name=%%~nF"
    set "extension=%%~xF"
    
    rem Convert filename to lowercase and kebab-case
    set "new_name=!old_name:_=-!"
    set "new_name=!new_name: =-!"
    set "new_name=!new_name:~0,1!!new_name:~1!"
    set "new_name=!new_name:l=!"

    rem Convert extension to lowercase
    set "extension=!extension:~1!"
    set "extension=!extension:~0,3!"

    rem Rename the file
    ren "%%F" "!new_name!.!extension!"
)

echo Files renamed successfully.

endlocal
