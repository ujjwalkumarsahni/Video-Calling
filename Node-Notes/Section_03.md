# Section 3: Basics of OS

## 1. What Is CPU, Processor, and Core?
- **CPU (Central Processing Unit):** Executes instructions and performs calculations.
- **Processor:** Another term for CPU, can have multiple cores.
- **Core:** An independent processing unit within a CPU.

## 2. What Is OS and Kernel?
- **Operating System (OS):** Manages hardware and software resources (e.g., Windows, Linux, macOS).
- **Kernel:** The core part of an OS that controls CPU, memory, and hardware interactions.

## 3. What Is a Process?
- An executing instance of a program.
- Has attributes like PID (Process ID), memory allocation, and state (Running, Sleeping, etc.).

## 4. What Is Thread, Concurrency, and Parallelism?
- **Thread:** A lightweight subprocess sharing memory.
- **Concurrency:** Multiple tasks progressing at the same time.
- **Parallelism:** Multiple tasks executing simultaneously.

## 5. Can a Process Exist Without a Thread?
- Yes, but it will be idle. Example: A daemon process waiting for user input.

## 6. Debugging Worker Threads
- Tools like `htop`, `strace`, or `gdb` help debug threads.
- Example:
```bash
gdb -p <pid>
thread apply all bt
```

## 7. What Is an Environment Variable?
- Stores configuration settings for the OS and applications.
- Example:
```bash
echo $HOME
```

## 8. Setting and Using Environment Variables
- **Temporary:**
```bash
export MY_VAR="Hello"
echo $MY_VAR
```
- **Permanent:** Add to `~/.bashrc`.

## 9. Installing Windows Subsystem for Linux (WSL)
- Enable WSL on Windows:
```powershell
wsl --install
```
- Install Ubuntu:
```powershell
wsl --install -d Ubuntu
```

## 10. Understanding the Path System: Windows vs. Linux Explained
- **Windows:** Uses `C:\Users\Documents`
- **Linux:** Uses `/home/user/Documents`
- Use `cygpath` in WSL to convert paths.

## 11. What Are Executable Files?
- **Windows:** `.exe, .bat`
- **Linux/macOS:** No extension, but marked executable (`chmod +x`).
```bash
chmod +x myscript.sh
./myscript.sh
```

## 12. Managing File Permissions
- `chmod` and `chown` are used for permission control.
```bash
chmod 755 script.sh
ls -l script.sh
```

## 13. How Commands Get Executed?
- Shell searches `PATH` for the command.
- Example:
```bash
which python
```

## 14. Important Methods and Properties of The Process Object
- Using `psutil` in Python to monitor processes.
```python
import psutil
for process in psutil.process_iter(['pid', 'name']):
    print(process.info)
```

---
---