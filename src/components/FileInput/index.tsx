import React, { forwardRef, useState } from 'react';
import { StyledFileInput, StyledInputWrapper, StyledInputError, StyledFiles, StyledFileInputProps } from './styles';
import { Label } from '../Label';
import { Button } from '../Button';

type Ref = HTMLInputElement;

type FileInputProps = StyledFileInputProps & {
  label?: string;
}

const FileInputComponent: React.FC<FileInputProps> = ({ ref, label, floating, type = 'file', ...props }) => {
  const [files, setFiles] = useState<string[]>();

  const proxyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = props;
    const files: FileList | null = event.target.files;

    if (files && files.length) {
      const fileNames: string[] = [];

      for (let i = 0; i < files.length; i++) {
        const file = files.item(i);

        if (file) {
          fileNames.push(file.name);
        }
      }

      setFiles(fileNames)
    }

    if (onChange) {
      onChange(event);
    }
  }

  const removeFile = (index: number) => {
    if (files) {
      const prevFiles = files.slice();
      prevFiles.splice(index, 1);
      setFiles(prevFiles);
    }
  }

  return (
    <StyledInputWrapper>
      <StyledFileInput type={type} {...props} onChange={(e: React.ChangeEvent<HTMLInputElement>) => proxyChange(e)}/>
      {label && <Label htmlFor={props.id} aria-label={props.id}>{label}</Label>}
      {props.error && <StyledInputError>{props.error}</StyledInputError>}

      {files &&
        <StyledFiles>
        {files.map((file: string, index: number) => (
          <li key={index}>
            <span>{file}</span>
            <Button onClick={() => removeFile(index)} fill="clear" iconOnly={<i>&times;</i>} />
          </li>
        ))}
      </StyledFiles>
      }
    </StyledInputWrapper>
  );
}

export const FileInput = forwardRef<Ref, FileInputProps>((props, ref) => (
  <FileInputComponent ref={ref} {...props} />
))

export { StyledFileInput, FileInputProps };
