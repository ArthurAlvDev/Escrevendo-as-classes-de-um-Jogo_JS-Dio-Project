# Classe Herói
class Heroi:
    def __init__(self, nome, idade, tipo):
        self.nome = nome
        self.idade = idade
        self.tipo = tipo

    # Método para ataque
    def atacar(self):
        if self.tipo == "mago":
            ataque = "magia"
        elif self.tipo == "guerreiro":
            ataque = "espada"
        elif self.tipo == "monge":
            ataque = "artes marciais"
        elif self.tipo == "ninja":
            ataque = "shuriken"
        else:
            ataque = "ataque desconhecido"
        
        # Exibe a mensagem de ataque
        print(f"O {self.tipo} atacou usando {ataque}.")

# Exemplo de uso:
heroi1 = Heroi("Arthas", 30, "guerreiro")
heroi1.atacar()

heroi2 = Heroi("Merlin", 150, "mago")
heroi2.atacar()
