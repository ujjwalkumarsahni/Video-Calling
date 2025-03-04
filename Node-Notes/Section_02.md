## Section 2: Basics of Terminal

## 1. Introduction to Terminal and Shell
The **terminal** is a command-line interface (CLI) that allows users to interact with the operating system using text-based commands. The **shell** is the program that interprets these commands.

## 2. Basic Shell Commands
| Command | Description |
|---------|------------|
| `echo "Hello, World!"` | Prints text to the screen |
| `pwd` | Prints the current working directory |
| `whoami` | Displays the currently logged-in user |

## 3. Navigating the File System (`cd`)
| Command | Description |
|---------|------------|
| `cd /home` | Go to the `/home` directory |
| `cd ..` | Move up one directory |
| `cd ~` | Go to the home directory |

## 4. Listing Directory Contents (`ls`)
| Command | Description |
|---------|------------|
| `ls` | List files in the current directory |
| `ls -l` | Detailed listing with file permissions |
| `ls -a` | Show hidden files |

## 5. Creating, Copying, Moving, and Deleting Files and Directories
| Command | Description |
|---------|------------|
| `touch file.txt` | Create a file |
| `mkdir mydir` | Create a directory |
| `cp file.txt newfile.txt` | Copy a file |
| `mv file.txt /path/` | Move a file |
| `rm file.txt` | Remove a file |
| `rmdir mydir` | Remove an empty directory |

## 6. Viewing and Editing Files
| Command | Description |
|---------|------------|
| `cat file.txt` | View the contents of a file |
| `nano file.txt` | Edit a file with the Nano editor |
| `vim file.txt` | Edit a file with Vim |

## 7. What Is a Prompt in Terminal?
The **prompt** is the text displayed before the command input. It often includes:
- Username
- Hostname
- Current directory

Example:
```bash
user@hostname:~$
```

## 8. Configuring the Terminal Using `.bashrc`
The `.bashrc` file is used to configure the shell environment.
To edit it:
```bash
nano ~/.bashrc
```
Example configurations:
```bash
export PS1="\u@\h:\w$ "
alias ll="ls -la"
```
Then apply changes:
```bash
source ~/.bashrc
```

## 9. Using Aliases for Command Shortcuts
Aliases create shortcuts for long commands.
| Command | Description |
|---------|------------|
| `alias ll="ls -la"` | Creates an alias `ll` for `ls -la` |
| `alias gs="git status"` | Shortens `git status` |

Example:
```bash
$ alias ll="ls -la"
$ ll
```
---
---
