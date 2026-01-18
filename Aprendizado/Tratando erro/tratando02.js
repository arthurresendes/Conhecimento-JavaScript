// throw new Error('Houve um erro, mas não se preocupe estamos trabalhando nisso')

var video = Array();

video[1] = Array();
video[1]['nome'] = 'Dexter';
video[1]['categoria'] = 'Suspense';

function getVideo(video){
    try{
        document.write(video[0]['nome'])
    }catch(e){
        document.write('Erro ao buscar nome<br>')
        document.write(e)
    }finally{
        document.write('<br>Fim da busca')
    }
}

getVideo(video)