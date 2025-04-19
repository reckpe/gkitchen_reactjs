import IconScan from '../../assets/icons/ic_scan.svg';
import DownloadComponent from '../../components/Download/DownloadComponent';
import Language from '../../components/Language/Language';

const ExtraHeader = () => {
  return (
    <div className="flex items-center">
        <div className="scan-wrapper w-6 h-6 mr-2">
            <img src={IconScan} className='w-full h-full' alt="scan" />
        </div>
        <Language />
        <div className='mx-2'>
          <DownloadComponent />
        </div>
    </div>
  )
}

export default ExtraHeader