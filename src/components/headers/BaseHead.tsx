import Head from 'next/head'

interface BaseHeadProps {
    title: string
    description: string
}

const BaseHead: React.FC<BaseHeadProps> = ({title, description, ...props}) => {
    return (
        <Head>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{ title }</title>
        </Head>
    )
}

export default BaseHead