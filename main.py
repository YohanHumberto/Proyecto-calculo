from sympy import *
import tkinter as tk

f= ""

class NickGui(tk.Frame):

    def __init__(self, root, *args, **kwargs):
        super().__init__(root, args, **kwargs)
        self.root = root
        self.root.title("Nick")

        self.nick = tk.StringVar()
        frame = tk.Frame(root)
        frame.grid(row=0, column=0, padx=5, pady=5)

        label_nick = tk.Label(frame, text="Inserte su nick y pulse en Listo!")
        label_nick.grid(row=1, column=0, columnspan=2, padx=5, pady=5, sticky="n")

        insert_nick = tk.Entry(frame, width=30, textvariable=self.nick)
        insert_nick.grid(row=2, column=0, sticky="w", padx=5, pady=5)

        boton_nick = tk.Button(frame, text="Listo!", command=self.obtener_nick)
        boton_nick.grid(row=2, column=1, sticky="e", padx=5, pady=5)

    def obtener_nick(self):
        f=self.nick.get()
        x=symbols("x")
        res = integrate(f, x)
        print(res)
        self.root.destroy()


if __name__ == "__main__":
    root = tk.Tk()
    root.geometry("400x400")
    NickGui(root).place(relwidth=1, relheight=1)
    root.mainloop()




