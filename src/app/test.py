import os
import json
from PIL import Image

def get_image_metadata(folder_path):
    image_data = []

    # 指定フォルダ内のファイルを走査
    for file_name in os.listdir(folder_path):
        file_path = os.path.join(folder_path, file_name)

        # ファイルが画像かどうかを確認
        if os.path.isfile(file_path):
            try:
                with Image.open(file_path) as img:
                    width, height = img.size
                    title, _ = os.path.splitext(file_name)

                    # 必要な情報を辞書として保存
                    image_data.append({
                        "filename": file_name,
                        "title": title,
                        "width": width,
                        "height": height,
                    })
            except Exception as e:
                print(f"Error processing file {file_name}: {e}")

    return image_data

def main():
    folder_path = "C:/Users/fengy/programming/NextJS/portfolio/cosmos-portfolio/public/images/artWorks"

    # 画像メタデータの取得
    metadata = get_image_metadata(folder_path)

    # JSONとして出力
    output_json = json.dumps(metadata, indent=4, ensure_ascii=False)
    print(output_json)

if __name__ == "__main__":
    main()
