import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import styles from '@/app/page.module.css'

type PageCardProps = {
  title: string,
  description: string,
  link: string,
  imagePath: string
}

export default function PageCard(props: PageCardProps) {
  return (
    <Link href={props.link}>
      <Card sx={{ maxWidth: 345, border: '1px solid black' }} className={styles.pageCard}>
        <CardMedia
          component="img"
          alt=""
          height="140"
          image={props.imagePath}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {props.description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}