import { ChangeEvent } from 'react'
import { Flex } from "@chakra-ui/react"
import ExchangeProfileForm from './ExchangeProfileForm'
import UserInformationDetails from './UserInformationDetails'
import { TagsData } from '../../hooks/useUserProfileExtensions'
import { FormErrors } from '../../core/Forms.types'
import useCurrentUser from '../../hooks/useCurrentUser'

interface EdxUserInfo {
    email: string 
    firstName: string 
    lastName: string 
    organization: string 
    jobDepartment: string 
    jobTitle: string
}

interface EdxProfile {
    imageUrl: string
    additionalTitle: string 
    bio: string 
    tags: TagsData
}

interface UserProfileModalSimpleEditProps {
    userInfo: EdxUserInfo
    exchangeProfile: EdxProfile
    isSavingExtensions: boolean 
    errors: FormErrors
    isValidData: () => boolean 
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeImage: () => void
    onChangeBio: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onAddTag: () => void
    onRemoveTag: (tagName: string) => void
}

const UserProfileModalSimpleEdit = ({ userInfo, exchangeProfile, isSavingExtensions, isValidData, errors, onChangeBio, onChangeImage, onInputChange, onAddTag, onRemoveTag }: UserProfileModalSimpleEditProps) => {
    const {
        currentUser
    } = useCurrentUser()

    return (
        <Flex flexDir='column' w='full'>
            <UserInformationDetails 
                userInfo={userInfo}
                source={currentUser? currentUser.source : null} />
            <Flex bg='gray.300' mt='20px' h='1px' w='full' />
            <Flex mt='16px'>
                <ExchangeProfileForm
                    userInfo={userInfo}
                    exchangeProfile={exchangeProfile}
                    isSavingExtensions={isSavingExtensions}
                    isValidData={isValidData}
                    errors={errors}
                    onChangeBio={onChangeBio}
                    onChangeImage={onChangeImage}
                    onInputChange={onInputChange}
                    onAddTag={onAddTag}
                    onRemoveTag={onRemoveTag} />
            </Flex>
        </Flex>
    )
}

export default UserProfileModalSimpleEdit