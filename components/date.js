//para lidar com as datas renderizadas nas páginas de posts/
import { parseISO, format } from 'date-fns'
import { zonedTimeToUtc } from 'date-fns-tz';
import pt from 'date-fns/locale/pt-BR'


export default function Date({ dateString }) {
    const date = parseISO(dateString)
    //time zone
    const znDate = zonedTimeToUtc(date, 'America/Sao_Paulo');
    const formattedDate = format(
        znDate, 
        "'Dia' dd 'de' MMMM' de 'yyyy', às ' HH:mm'h'",{
            locale: pt
        }
      );
    return <time dateTime={dateString}>{formattedDate}</time>
  }