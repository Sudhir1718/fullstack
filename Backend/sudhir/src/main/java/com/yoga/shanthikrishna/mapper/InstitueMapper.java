package com.yoga.shanthikrishna.mapper;
import com.yoga.shanthikrishna.dto.InstitueDto;
import com.yoga.shanthikrishna.entity.Institue;
public class InstitueMapper {

    public static InstitueDto mapToCollegeDto(Institue college) {
        InstitueDto collegeDto = new InstitueDto();
        collegeDto.setInstituteId(college.getInstituteId());
        collegeDto.setInstituteName(college.getInstituteName());
        collegeDto.setInstituteDescription(college.getInstituteDescription());
        collegeDto.setInstituteAddress(college.getInstituteAddress());
        collegeDto.setMobile(college.getMobile());
        collegeDto.setEmail(college.getEmail());
        return collegeDto;
    }

    public static Institue mapToCollege(InstitueDto collegeDto) {
        Institue college = new Institue();
        college.setInstituteId(collegeDto.getInstituteId());
        college.setInstituteName(collegeDto.getInstituteName());
        college.setInstituteDescription(collegeDto.getInstituteDescription());
        college.setInstituteAddress(collegeDto.getInstituteAddress());
        college.setMobile(collegeDto.getMobile());
        college.setEmail(collegeDto.getEmail());
        return college;
    }

}
