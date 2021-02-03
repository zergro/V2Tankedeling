import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from "@contentful/rich-text-types";
import Image from 'next/image'
import markdownStyles from './markdown-styles.module.css'

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles['markdown']}>
        {documentToReactComponents(content.json, {
          [BLOCKS.EMBEDDED_ASSET]: node =>
            <Image src={node.data.target.fields.file.url} />
        })}
      </div>
    </div>
  )
}
