import styled  from 'styled-components'

export const ItemContainer = styled.div`
    width: 80%;

    h3{
        font-size: 32px;
        color: #fafafa;

    }

    p{
        margin: 5px 0 ;
        font-size: 12px;
        color: #fafafa60 ;
        padding-bottom: 10px;
    }

    a{
        text-decoration: none;
        color: #fafafa60;
        margin-top: 10px;

        &:hover{
            color: #008000;
            cursor: pointer;
            transition: ease-in-out;
}
    }

    a.remover{
        text-decoration: none;
        color: #ff0000;
        margin-top: 10px;

        &:hover{
            transition: ease;
            color: #b30000;
            cursor: pointer;
        }
    }

    hr{
        color:#fafafa60 ;
        margin: 20px 0;
    }

`