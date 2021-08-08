import liwc
from minha_classe import MinhaClasse

parse, category_names = liwc.load_token_parser("./dicionario.dic")


texto = ''
texto_correto = []
total_palavras = 0

# le o texto no arquivo 
texto= MinhaClasse.retorna_texto()

# print(texto)
#retira ponto, espaco vazio, virgula do texto.
# tranforma o texto em minusculo
# cria um array texto_correto com um array de palavras que pertecem ao texto original
texto_correto = MinhaClasse.limpa_texto(texto)

# imprime total de palavras que existem no texto
MinhaClasse.imprime_total_palavra(texto_correto)


# cria um objeto para guardar o total de palavras referente a um sentimento
sentimento= MinhaClasse.cria_um_objeto()

# calcula quantas palavras existem referente aquele sentimento
sentimento = MinhaClasse.calcula_palavra_sentimento(sentimento,texto_correto)

# imprime o resutado das palavras e seus referentes sentimentos
MinhaClasse.imprime_resultado_sentimento(sentimento)

# imprime total de palavras ofensivas
MinhaClasse.imprime_total_palavras_ofensivas(sentimento)

# imprime total de palavras de asiedade
MinhaClasse.imprime_total_palavras_ansiedade(sentimento)

# cacula a porentagem referente aos sentimentos
MinhaClasse.calcula_e_imprime_porcentagem(sentimento)
