import liwc




def retorna_texto():
        texto = ''
        f = open('texto.txt', 'r')
        for line in f:
            texto=texto+line
        return texto

def limpa_texto(texto):
    texto_correto = []
    palavra = ''
    i=0
    while ( i <= (len(texto)-1)):
        while(i <= (len(texto)-1) and texto[i] != ' ' and texto[i] !='\n' and texto[i] !='\0' and texto[i] !=',' and texto[i] !='.' and texto[i] !=':'):
            palavra = palavra + texto[i]
            i= i+1;
        if(palavra != ''): 
            texto_correto.append(str.lower(palavra))
        if(i < (len(texto)-1) and (texto[i] == ' ' or texto[i] =='\n' or texto[i] =='\0' or texto[i] ==',' or texto[i] =='.' or texto[i] ==':' or texto[i] =='\r')):
            i= i+1
        if(i < (len(texto)) and texto[i]=='.'):
            i= i+1
        palavra=''
    return texto_correto

def imprime_total_palavra(texto_correto):
    total_palavras = len(texto_correto) 
    print("total palavras = "+ str(total_palavras))

def cria_um_objeto():
    sentimento= {
        'anx': 0,
        'swear': 0,
        'posemo': 0,
        'negemo': 0
    }
    return sentimento

def calcula_palavra_sentimento(sentimento,texto_correto):
    parse, category_names = liwc.load_token_parser("./dicionario.dic")
    for elemento in texto_correto:
        reposta_sentimento=list(parse(elemento))
        for elemento_resposta in reposta_sentimento:
            if(elemento_resposta == 'anx'):
              sentimento['anx']=sentimento['anx']+1
            if(elemento_resposta == 'swear'):
                sentimento['swear']=sentimento['swear']+1
            if(elemento_resposta == 'posemo'):
                sentimento['posemo']=sentimento['posemo']+1
            if(elemento_resposta == 'negemo'):
                sentimento['negemo']=sentimento['negemo']+1

    return sentimento

def imprime_resultado_sentimento(sentimento):
    print(sentimento)

def imprime_total_palavras_ofensivas(sentimento):
    print("total de palavras ofensivas :" + str(sentimento['swear']))

def imprime_total_palavras_ansiedade(sentimento):
    print("total de palavras de ansiedade :" + str(sentimento['anx']))

def calcula_e_imprime_porcentagem(sentimento):
    total_porcentagem_swer_anx = sentimento['anx']+sentimento['swear']

    porcentagem_swer = (sentimento['swear']*100)/total_porcentagem_swer_anx
    porcentagem_anx = (sentimento['anx']*100)/total_porcentagem_swer_anx

    total_porcentagem_posemo_negemo = sentimento['posemo']+sentimento['negemo']

    porcentagem_posemo = (sentimento['posemo']*100)/total_porcentagem_posemo_negemo
    porcentagem_negemo = (sentimento['negemo']*100)/total_porcentagem_posemo_negemo

    print("Porcentagem de palavras ofensivas :"+str(porcentagem_swer)+"%")
    print("Porcentagem de palavras de ansiedade :"+str(porcentagem_anx)+"%")
    print("Porcentagem de palavras positivas :"+str(porcentagem_posemo)+"%")
    print("Porcentagem de palavras negativas :"+str(porcentagem_negemo)+"%")

    if(porcentagem_posemo > porcentagem_negemo):
      print( "O tom geral do texto é Positivo.")
    else:
        print( "O tom geral do texto é Negativo.")

parse, category_names = liwc.load_token_parser("./dicionario.dic")


texto = ''
texto_correto = []
total_palavras = 0

# le o texto no arquivo 
texto= retorna_texto()

# print(texto)
#retira ponto, espaco vazio, virgula do texto.
# tranforma o texto em minusculo
# cria um array texto_correto com um array de palavras que pertecem ao texto original
texto_correto = limpa_texto(texto)

# imprime total de palavras que existem no texto
imprime_total_palavra(texto_correto)


# cria um objeto para guardar o total de palavras referente a um sentimento
sentimento= cria_um_objeto()

# calcula quantas palavras existem referente aquele sentimento
sentimento = calcula_palavra_sentimento(sentimento,texto_correto)

# imprime o resutado das palavras e seus referentes sentimentos
imprime_resultado_sentimento(sentimento)

# imprime total de palavras ofensivas
imprime_total_palavras_ofensivas(sentimento)

# imprime total de palavras de asiedade
imprime_total_palavras_ansiedade(sentimento)

# cacula a porentagem referente aos sentimentos
calcula_e_imprime_porcentagem(sentimento)