package com.yoga.shanthikrishna.controller;
import com.yoga.shanthikrishna.dto.InstitueDto;
import com.yoga.shanthikrishna.service.InstituteService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@AllArgsConstructor
@RestController
@RequestMapping("/api/institutes")
public class InstituteController {

    private  InstituteService collegeService;

    @PostMapping
    public ResponseEntity<InstitueDto> createInstitute(@RequestBody InstitueDto collegeDto) {
        InstitueDto savedCollege = collegeService.createInstitute(collegeDto);
        return new ResponseEntity<>(savedCollege, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<InstitueDto> getInstituteById(@PathVariable("id") Long instituteId) {
        
        InstitueDto instituteDTO = collegeService.getInstituteById(instituteId);
            return ResponseEntity.ok(instituteDTO);
        
    }

    @GetMapping
    public ResponseEntity<List<InstitueDto>> getAllInstitutes() {
        List<InstitueDto> institutes = collegeService.getAllInstitutes();
        return ResponseEntity.ok(institutes);
    }

     @PutMapping("{id}")
    public ResponseEntity<InstitueDto> updateInstitute(@PathVariable("id") Long instituteId, @RequestBody InstitueDto collegeDto) {
        InstitueDto updatedCollege = collegeService.updateInstitute(instituteId, collegeDto);
        return ResponseEntity.ok(updatedCollege);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteInstitute(@PathVariable("id") Long instituteId) {
        collegeService.deleteInstitute(instituteId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
