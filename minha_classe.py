from os import sendfile
import liwc

class MinhaClasse:

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