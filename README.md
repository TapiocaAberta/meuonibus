onibusMobileSJC
===============

AppMobile para Android e IOs que exibe os horários de todos os ônibus da cidade de São José dos Campos.

# Objetivo

O objetivo deste projeto é o de criar um aplicativo móvel que exiba as informações sobre os horários de todos os ônibus da cidade de São José dos Campos, não necessitando que o usuário tenha acesso a internet (App completamente Offline pois nem todos os usuários possuem internet a todo o momento).

# Coleta de Dados.

A prefeitura não disponibiliza os dados em formato aberto, forçando a necessidade da criação de um [WebCrawler](http://pt.wikipedia.org/wiki/Web_crawler) para realizar o processo de raspagem, para que fosse possível acessar os dados de maneira automática, e consequentemente deixá-los de maneira normalizada e interoperável (JSON), todo o código do Scrap está [neste repositório](https://github.com/transparenciasjc/dados_onibus).

# Plataformas e Arquitetura do Sistema

O projeto foi desenvolvido na plataforma [Titanium Alloy da Appcelerator](http://docs.appcelerator.com/titanium/3.0/#!/guide/Alloy_Framework) pois permite que a app seja "publicada" nas plataformas Android e IOS com a mesma base de código.

# Colaboração

Este projeto não foi desenvolvido em parceira com a prefeitura, nem com nenhuma empresa, mas toda a ajuda financeira e colaborativa é sempre bem vinda, pois para desenvolver eu tive diversos custos, tais como Licenças, computadores e aparelhos para testes, além do tempo empregado.

Tenho talento com programação, mas nem tanto com design, quem queira ajudar com edição das imagens e layout da app eu agradeceria bastante!

Este projeto é open-source sob a licença GPL, caso queira colaborar entre em contato no E-mail: paulo@transparenciasjc.org